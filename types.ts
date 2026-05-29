export interface Student {
  id: string;
  name: string;
  class: string;
  section: string;
  admissionNumber: string;
  fatherName: string;
  phoneNumber: string;
  address: string;
  admissionFee?: number;
  tuitionFee?: number;
  cautionDeposit?: number;
  totalFees?: number;
}