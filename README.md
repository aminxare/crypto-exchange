# Crypto Price Tracker App

This is a simple cryptocurrency price tracker application with a backend built using NestJS, a React client, and a MariaDB database. You can easily run the entire application within Docker containers.

## docs
- [Backend](./backend/README.md)

## Prerequisites

Before getting started, ensure you have the following prerequisites installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)


## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/crypto-price-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd crypto-price-tracker
   ```

3. Build the Docker containers:

   ```bash
   docker-compose build
   ```

4. Start the Docker containers:

   ```bash
   docker-compose up
   ```

5. Access the application:

   - Backend: http://localhost:5000
   - Client: http://localhost:3000



## Stopping the Application

To stop the application and shut down the Docker containers, press `Ctrl+C` in the terminal where the containers are running, or run:

```bash
docker-compose down
```

## Customize Configuration

- If you need to customize environment variables or database settings, update the `.env` and `docker-compose.yml` files accordingly.


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature`.
3. Commit your changes and push to your fork: `git commit -m "Add your feature" && git push origin feature/your-feature`.
4. Open a pull request with a detailed description of your changes.

Please ensure that your code passes linting and test checks before submitting a pull request.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Feel free to customize this README to include additional details about your application or any specific instructions users may need.