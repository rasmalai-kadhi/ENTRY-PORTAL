import { google, sheets_v4 } from 'googleapis';

interface GoogleSheetsConfig {
  spreadsheetId: string;
  sheetName: string;
}

interface SyncResult {
  success: boolean;
  rowId?: string;
  error?: string;
}

interface EnquiryRecord extends Record<string, unknown> {
  enquiry_number?: string;
  date?: string;
  course?: string;
  name?: string;
  dob?: string;
  gender?: string;
  motherName?: string;
  fatherName?: string;
  address?: string;
  mobile1?: string;
  mobile2?: string;
  email?: string;
  class10Percent?: string;
  class12Stream?: string;
  class12Percent?: string;
  physicsMarks?: string;
  chemistryMarks?: string;
  mathsMarks?: string;
  biologyMarks?: string;
  csMarks?: string;
  schoolNameWithState?: string;
  neetUgScore?: string;
  neetPgScore?: string;
  category?: string;
  cuetScoreRank?: string;
  cetScoreRank?: string;
  clatScoreRank?: string;
  catScoreRank?: string;
  jeeMainsCrl?: string;
  percentile?: string;
  pcmPercent?: string;
  pcbPercent?: string;
  collegeUniversityName?: string;
  courses?: string;
  marks?: string;
  reference?: string;
  client_ip?: string;
  submitted_at?: string;
  status?: string;
}

const HEADERS = [
  'Enquiry Number',
  'Date',
  'Course',
  'Name',
  'DOB',
  'Gender',
  "Mother's Name",
  "Father's Name",
  'Address',
  'Mobile 1',
  'Mobile 2',
  'Email',
  'Class 10 %',
  'Class 12 Stream',
  'Class 12 %',
  'Physics Marks',
  'Chemistry Marks',
  'Maths Marks',
  'Biology Marks',
  'CS Marks',
  'School Name & State',
  'NEET UG Score',
  'NEET PG Score',
  'Category',
  'CUET Score / Rank',
  'CET Score / Rank',
  'CLAT Score / Rank',
  'CAT Score / Percentile',
  'JEE Mains CRL',
  'Percentile',
  'PCM %',
  'PCB %',
  'College / University Name',
  'Courses',
  'Marks',
  'Reference',
  'Client IP',
  'Submitted At',
  'Status',
];

const FIELD_MAPPING: Record<string, keyof EnquiryRecord> = {
  'Enquiry Number': 'enquiry_number',
  'Date': 'date',
  'Course': 'course',
  'Name': 'name',
  'DOB': 'dob',
  'Gender': 'gender',
  "Mother's Name": 'motherName',
  "Father's Name": 'fatherName',
  'Address': 'address',
  'Mobile 1': 'mobile1',
  'Mobile 2': 'mobile2',
  'Email': 'email',
  'Class 10 %': 'class10Percent',
  'Class 12 Stream': 'class12Stream',
  'Class 12 %': 'class12Percent',
  'Physics Marks': 'physicsMarks',
  'Chemistry Marks': 'chemistryMarks',
  'Maths Marks': 'mathsMarks',
  'Biology Marks': 'biologyMarks',
  'CS Marks': 'csMarks',
  'School Name & State': 'schoolNameWithState',
  'NEET UG Score': 'neetUgScore',
  'NEET PG Score': 'neetPgScore',
  'Category': 'category',
  'CUET Score / Rank': 'cuetScoreRank',
  'CET Score / Rank': 'cetScoreRank',
  'CLAT Score / Rank': 'clatScoreRank',
  'CAT Score / Percentile': 'catScoreRank',
  'JEE Mains CRL': 'jeeMainsCrl',
  'Percentile': 'percentile',
  'PCM %': 'pcmPercent',
  'PCB %': 'pcbPercent',
  'College / University Name': 'collegeUniversityName',
  'Courses': 'courses',
  'Marks': 'marks',
  'Reference': 'reference',
  'Client IP': 'client_ip',
  'Status': 'status',
};

function getGoogleAuth() {
  const privateKeyId = process.env.GOOGLE_PRIVATE_KEY_ID;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

  if (!privateKeyId || !privateKey || !clientEmail) {
    throw new Error('Missing Google Sheets credentials in environment variables');
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

async function initializeSheet(config: GoogleSheetsConfig): Promise<void> {
  try {
    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: 'v4', auth }) as unknown as sheets_v4.Sheets;

    // Get existing sheets
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: config.spreadsheetId,
    });

    const sheetExists = spreadsheet.data.sheets?.some(
      sheet => sheet.properties?.title === config.sheetName
    );

    if (!sheetExists) {
      // Create the sheet if it doesn't exist
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: config.spreadsheetId,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: config.sheetName,
                },
              },
            },
          ],
        },
      });
    }

    // Add headers if not present
    const sheetData = await sheets.spreadsheets.values.get({
      spreadsheetId: config.spreadsheetId,
      range: `${config.sheetName}!A1:Z1`,
    });

    if (!sheetData.data.values || sheetData.data.values[0]?.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: config.spreadsheetId,
        range: `${config.sheetName}!A1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [HEADERS],
        },
      });
    }
  } catch (error) {
    console.error('Error initializing Google Sheet:', error);
    throw error;
  }
}

async function findRowByEnquiryNumber(
  config: GoogleSheetsConfig,
  enquiryNumber: string
): Promise<number | null> {
  try {
    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: 'v4', auth }) as unknown as sheets_v4.Sheets;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: config.spreadsheetId,
      range: `${config.sheetName}!A:A`,
    });

    const values = response.data.values || [];
    for (let i = 1; i < values.length; i++) {
      if (values[i][0] === enquiryNumber) {
        return i + 1; // Row numbers are 1-indexed
      }
    }

    return null;
  } catch (error) {
    console.error('Error finding row:', error);
    throw error;
  }
}

function enquiryToSheetRow(enquiry: EnquiryRecord): string[] {
  const row: string[] = [];

  for (const header of HEADERS) {
    const fieldKey = FIELD_MAPPING[header];
    let value = '';

    if (fieldKey && enquiry[fieldKey]) {
      value = String(enquiry[fieldKey]);
    }

    row.push(value);
  }

  return row;
}

export async function syncEnquiryToGoogleSheets(
  enquiry: EnquiryRecord
): Promise<SyncResult> {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const sheetName = process.env.GOOGLE_SHEETS_NAME || 'Enquiries';

    if (!spreadsheetId) {
      return {
        success: false,
        error: 'Google Sheets spreadsheet ID not configured',
      };
    }

    const config: GoogleSheetsConfig = { spreadsheetId, sheetName };

    // Ensure sheet is initialized
    await initializeSheet(config);

    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: 'v4', auth }) as unknown as sheets_v4.Sheets;

    // Check if enquiry already exists
    const existingRowNum = await findRowByEnquiryNumber(config, enquiry.enquiry_number || '');
    const sheetRow = enquiryToSheetRow(enquiry);

    if (existingRowNum) {
      // Update existing row
      const columnLetter = String.fromCharCode(65 + HEADERS.length - 1);
      await sheets.spreadsheets.values.update({
        spreadsheetId: config.spreadsheetId,
        range: `${config.sheetName}!A${existingRowNum}:${columnLetter}${existingRowNum}`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [sheetRow],
        },
      });

      return {
        success: true,
        rowId: `${existingRowNum}`,
      };
    } else {
      // Append new row
      const appendResponse = await sheets.spreadsheets.values.append({
        spreadsheetId: config.spreadsheetId,
        range: `${config.sheetName}!A:A`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [sheetRow],
        },
      });

      const newRowNum = appendResponse.data.updates?.updatedRows ? 2 : 1;

      return {
        success: true,
        rowId: String(newRowNum),
      };
    }
  } catch (error) {
    console.error('Error syncing to Google Sheets:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to sync to Google Sheets',
    };
  }
}
