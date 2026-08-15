// Central Google Sheets submission utility for all React enquiry forms.
// Uses no-cors POST so the response is always opaque — catch network errors only.
const SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

export async function submitLead({
  name = '',
  phone = '',
  email = '',
  service = '',
  message = '',
} = {}) {
  if (!SCRIPT_URL) {
    console.warn('[submitLead] REACT_APP_GOOGLE_SCRIPT_URL is not set in .env');
    return;
  }
  await fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ name, phone, email, service, message }),
  });
}
