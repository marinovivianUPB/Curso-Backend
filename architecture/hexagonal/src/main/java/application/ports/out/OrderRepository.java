package application.ports.out;

import java.util.ArrayList;

public interface OrderRepository {
    List<Order> libros = new ArrayList<>();

    void save(Order order);
    List<Order> findAll();
    int buyOrder(int cantidad);
    Order searchOrderById(String id);
    List<Order> searchOrder(String texto);

}
