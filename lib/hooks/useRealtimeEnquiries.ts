'use client';

import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { RealtimeChannel } from '@supabase/supabase-js';

interface NewEnquiryNotification {
  enquiry_number: string;
  name: string;
  course: string;
  id: string;
}

interface UseRealtimeEnquiriesOptions {
  onNewEnquiry?: (enquiry: NewEnquiryNotification) => void;
}

export function useRealtimeEnquiries(options: UseRealtimeEnquiriesOptions = {}) {
  const [isConnected, setIsConnected] = useState(false);
  const [notification, setNotification] = useState<NewEnquiryNotification | null>(null);

  useEffect(() => {
    const supabase = createClient();
    let channel: RealtimeChannel;

    const setupChannel = async () => {
      channel = supabase
        .channel('new_enquiries')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'enquiries',
          },
          (payload) => {
            const newEnquiry = payload.new as {
              id: string;
              enquiry_number: string;
              name: string;
              course: string;
              created_at: string;
            };
            const notification: NewEnquiryNotification = {
              id: newEnquiry.id,
              enquiry_number: newEnquiry.enquiry_number,
              name: newEnquiry.name,
              course: newEnquiry.course,
            };
            setNotification(notification);
            options.onNewEnquiry?.(notification);
          },
        )
        .subscribe(status => {
          setIsConnected(status === 'SUBSCRIBED');
        });
    };

    void setupChannel();

    return () => {
      if (channel) {
        void supabase.removeChannel(channel);
      }
    };
  }, [options]);

  const clearNotification = useCallback(() => {
    setNotification(null);
  }, []);

  return { notification, isConnected, clearNotification };
}
