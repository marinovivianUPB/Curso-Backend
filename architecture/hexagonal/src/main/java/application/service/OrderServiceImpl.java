package application.service;

import application.model.Order;
import application.ports.in.OrderService;
import application.ports.out.OrderRepository;

import java.util.List;

public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public int buyOrder(int cantidad) {
        return orderRepository.buyOrder(cantidad);
    }

    @Override
    public Order searchOrderById(String id){
        return orderRepository.searchOrderById(id);
    }

    @Override
    public List<Order> searchOrder(String texto) {
        return orderRepository.search(texto);
    }

    @Override
    public void createOrder(Order order) {
        orderRepository.save(order);
    }

    @Override
    public List<Order> listOrders() {
        return orderRepository.findAll();
    }
}