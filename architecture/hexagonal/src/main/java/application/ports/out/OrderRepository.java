package application.ports.out;

import application.model.Order;

import java.util.ArrayList;
import java.util.List;

public interface OrderRepository {
    List<Order> libros = new ArrayList<>();

    void save(Order order);
    List<Order> findAll();
    int buyOrder(int cantidad);
    Order searchOrderById(String id);
    List<Order> searchOrder(String texto);
    void createOrder(Order order);
    List<Order> listOrders();

    List<Order> search(String texto);
}
