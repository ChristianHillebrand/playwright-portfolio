export interface ContactTestData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const validContactData: ContactTestData = {
  name: 'Chris Test',
  email: 'chris.test@example.com',
  phone: '2525550123',
  message: 'Testing successful form validation.',
};

export const invalidContactData: ContactTestData = {
  name: 'Chris Test',
  email: 'not-an-email',
  phone: '2525550123',
  message: 'Testing invalid email validation.',
};