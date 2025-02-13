import { useState, useEffect } from "react";
import { Input } from "./components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/ui/pagination";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const usersPerPage = 6;

  const fetchUsers = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://reqres.in/api/users?page=${page}&per_page=${usersPerPage}`
      );
      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);

      if (page === 1) {
        const allPagesPromises = Array.from(
          { length: data.total_pages },
          (_, i) =>
            fetch(
              `https://reqres.in/api/users?page=${
                i + 1
              }&per_page=${usersPerPage}`
            ).then((res) => res.json())
        );

        const allPagesData = await Promise.all(allPagesPromises);
        const allUsersData = allPagesData.flatMap((pageData) => pageData.data);
        setAllUsers(allUsersData);
      }
    } catch (err) {
      setError("Error al cargar los usuarios");
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = searchTerm
    ? allUsers.filter((user) => {
        const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
        const email = user.email.toLowerCase();
        const searchLower = searchTerm.toLowerCase();

        return fullName.includes(searchLower) || email.includes(searchLower);
      })
    : users;

  const handleUserSelect = (user) => {
    console.log("Usuario seleccionado:", user);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (!searchTerm) {
      fetchUsers(page);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div className="text-center p-8">Cargando usuarios...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-8">{error}</div>;
  }

  const shouldShowPagination = searchTerm.length === 0;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Listado de Usuarios
      </h1>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Buscar usuarios por nombre o email..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-md mx-auto"
        />
      </div>

      <UserList users={filteredUsers} onUserSelect={handleUserSelect} />

      {shouldShowPagination && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    currentPage > 1 && handlePageChange(currentPage - 1)
                  }
                  className={
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => handlePageChange(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    currentPage < totalPages &&
                    handlePageChange(currentPage + 1)
                  }
                  className={
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default App;
