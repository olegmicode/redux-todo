import Header from './features/header/Header'
import TodoList from './features/todos/TodoList'
import Container from '@mui/material/Container';

function App() {
  return (
    <Container maxWidth="sm">
      <nav align="center">
        <section>
          <h1>Redux Fundermentals Example</h1>
        </section>
      </nav>
      <main>
        <section align="center">
          <h2>Todos</h2>
          <div>
            <Header />
            <TodoList />
          </div>
        </section>
      </main>
    </Container>
  );
}

export default App;
