@param role A string do papel (ex: 'admin', 'doctor').
@returns
export const getRoleText = (role: string): string => {
  switch (role) {
    case 'admin':
      return 'Administrador';
    case 'doctor':
      return 'Médico';
    case 'patient':
      return 'Paciente';
    default:
      return role;
  }
};