package application.ports.in;

public interface OrderService {
    void createOrder(Order order);
    List<Order> listOrders();
}