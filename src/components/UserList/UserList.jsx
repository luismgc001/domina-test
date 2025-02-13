/* eslint-disable react/prop-types */
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const UserList = ({ users, onUserSelect }) => {
  if (users.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        No se encontraron usuarios en esta página
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <Card key={user.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex flex-col space-y-2">
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-lg font-semibold text-center">
                {user.first_name} {user.last_name}
              </h3>
              <p className="text-gray-600 text-center">{user.email}</p>
              <Button
                onClick={() => onUserSelect(user)}
                variant="outline"
                className="w-full mt-2"
              >
                Ver detalles
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
