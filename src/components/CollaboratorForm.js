import React, { useState, useEffect } from 'react';

const CollaboratorForm = ({ addCollaborator, editCollaborator, currentCollaborator, setCurrentCollaborator }) => {
  const [formData, setFormData] = useState(currentCollaborator || { rut: '', name: '', address: '' });

  useEffect(() => {
    setFormData(currentCollaborator || { rut: '', name: '', address: '' });
  }, [currentCollaborator]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentCollaborator) {
      editCollaborator(formData);
    } else {
      addCollaborator(formData);
    }
    setFormData({ rut: '', name: '', address: '' });
    setCurrentCollaborator(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="rut" placeholder="RUT" value={formData.rut} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} required />
      <button type="submit">{currentCollaborator ? 'Editar' : 'Agregar'} Colaborador</button>
    </form>
  );
};

export default CollaboratorForm;