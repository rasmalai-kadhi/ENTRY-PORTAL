'use client';

import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonBase from 'react-loading-skeleton';
import type { SkeletonProps } from 'react-loading-skeleton';

export function Skeleton(props: SkeletonProps) {
  return <SkeletonBase {...props} />;
}

export function SkeletonLine({ width = '100%', height = 16, className = '' }: { width?: SkeletonProps['width']; height?: SkeletonProps['height']; className?: string }) {
  return <Skeleton width={width} height={height} className={className} />;
}

export function SkeletonRows({ count = 5, columns = 5 }: { count?: number; columns?: number }) {
  return <>
    {Array.from({ length: count }, (_, rowIndex) => (
      <tr key={rowIndex} className="skeleton-table-row">
        {Array.from({ length: columns }, (_, columnIndex) => (
          <td key={columnIndex}><Skeleton height={16} /></td>
        ))}
      </tr>
    ))}
  </>;
}
