/* eslint-disable max-len */

type NameType = 'firstName' | 'lastName'

export const nameValidator = (name: string, nameType: NameType) => {
  if (name.length < 2) {
    return {
      valid: false,
      errorText: `Glöm inte att fylla i ditt ${nameType === `firstName` ? `förnamn` : `efternamn`}`,
    }
  }

  if (!/^[a-öA-Ö]+$/.test(name)) {
    return {
      valid: false,
      errorText: `Ange namn med endast bokstäver`,
    }
  }
  return {
    valid: true,
    errorText: ``,
  }
}

export const emailValidator = (email: string) => {
  if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    return {
      valid: false,
      errorText: `Ange en giltig email adress`,
    }
  }
  return {
    valid: true,
    errorText: ``,
  }
}
