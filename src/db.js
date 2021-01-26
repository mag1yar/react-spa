import localStorageDB from 'localstoragedb';

// Если БД не существует, создаётся.
let db = localStorageDB('datebase', localStorage);
window.db = db;
// Проверка, если БД только создался, создать таблицу
if (db.isNew()) {
  db.createTable('clients', ['name', 'surname', 'middlename', 'phone', 'experience', 'specialty']);

  db.commit();
}

const addClientToDB = ({ name, surname, middlename, phone, experience, specialty }) => {
  db.insert('clients', { name, surname, middlename, phone, experience, specialty });
  db.commit();
};
const changeClientInDB = ({ ID, name, surname, middlename, phone, experience, specialty }) => {
  db.update('clients', { ID }, (row) => {
    row.name = name;
    row.surname = surname;
    row.middlename = middlename;
    row.phone = phone;
    row.experience = experience;
    row.specialty = specialty;
    return row;
  });
};

const getClientFromDB = (ID) => {
  return db.queryAll('clients', {
    query: { ID },
  });
};

const getAllClients = () => {
  return db.queryAll('clients');
};

const removeClientFromDB = (ID) => {
  db.deleteRows('clients', { ID });
  db.commit();
};

const clearDB = () => {
  db.deleteRows('clients');
  db.commit();
};

export {
  db,
  addClientToDB,
  getClientFromDB,
  getAllClients,
  removeClientFromDB,
  clearDB,
  changeClientInDB,
};
