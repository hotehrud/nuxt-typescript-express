export * from "./state";

export interface IPerson {
  id: number;
  first_name: string;
  last_name: string;
  contact: IContact;
  gender: string;
  ip_address: string;
  avatar: string;
  address: IAddress;
}

export interface IContact {
  email: string;
  phone: string;
}

export interface IAddress {
  city: string;
  country: string;
  postalCode: string;
  state: string;
  street: string;
}
