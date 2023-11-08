package application.ports.in;

import application.model.Order;

import java.util.List;

public interface OrderService {
    void createOrder(Order order);
    List<Order> listOrders();
    int buyOrder(int cantidad);
    Order searchOrderById(String id);
    List<Order> searchOrder(String texto);
    void createOrder(Order order);
    List<Order> listOrders();
}