import http from 'http';
import app from './app';
import { PORT } from './utils/config';

// connect to server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});