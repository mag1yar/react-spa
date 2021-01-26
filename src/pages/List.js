import React from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchClients, selectClient } from '../redux/actions/clients';
import { getAllClients, removeClientFromDB, clearDB } from '../db';

function List() {
  const dispatch = useDispatch();
  const isLoaded = useSelector(({ clients }) => clients.isLoaded);
  const updateList = () => {
    dispatch(fetchClients());
  };
  React.useEffect(() => {
    updateList();
  }, []);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Номер телефона</th>
            <th>Карта</th>
            <th>
              Действия <Button onClick={(() => clearDB(), () => updateList())}>Удалить всё</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoaded
            ? getAllClients().map((client) => (
                <tr key={client.ID} isLoading={true}>
                  <td>{client.ID}</td>
                  <td>{client.name}</td>
                  <td>{client.phone}</td>
                  <td>
                    <Button onClick={() => dispatch(selectClient(client))} as={Link} to="/card">
                      Перейти
                    </Button>
                  </td>
                  <td>
                    <Button onClick={(() => removeClientFromDB(client.ID), () => updateList())}>
                      Удалить
                    </Button>
                  </td>
                </tr>
              ))
            : ''}
        </tbody>
      </Table>
      {isLoaded ? (
        ''
      ) : (
        <div className="loader">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </>
  );
}

export default List;
