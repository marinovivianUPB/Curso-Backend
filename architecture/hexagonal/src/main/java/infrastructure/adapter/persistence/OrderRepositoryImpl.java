package infrastructure.adapter.persistence;

import application.model.Order;
import application.ports.out.OrderRepository;

import java.util.List;
import java.util.stream.Collectors;

public class OrderRepositoryImpl implements OrderRepository {



    // Aquí se implementarían los métodos usando, por ejemplo, JPA o cualquier otro ORM

    @Override
    public void save(Order order) {
        libros.add(order);
    }

    @Override
    public List<Order> findAll() {
        // Implementación de la lógica para obtener todos los pedidos
    }

    @Override
    public int buyOrder(int cantidad) {
        return 0;
    }
    @Override
    public void createOrder(Order order) {
        libros.add(order);
    }

    @Override
    public List<Order> listOrders() {
        return libros;
    }

    @Override
    public List<Order> searchOrder(String texto){
        return libros.stream().filter(a -> (a.getName()==texto || a.getAutor()==texto)).collect(Collectors.toList());
    }

    public Order searchOrderById(String id){
        return libros.stream().filter(a -> a.getId()==id).collect(Collectors.toList()).get(0);
    }
}
