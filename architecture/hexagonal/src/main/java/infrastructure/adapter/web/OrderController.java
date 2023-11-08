package infrastructure.adapter.web;

import application.ports.in.OrderService;
import application.model.Order;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<Void> createOrder(@RequestBody Order order) {
        orderService.createOrder(order);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Order>> listOrders() {
        return ResponseEntity.ok(orderService.listOrders());
    }

    @GetMapping
    public ResponseEntity<Order> getOrderById(String id) {
        return ResponseEntity.ok(orderService.searchOrderById(id));
    }

    @GetMapping
    public ResponseEntity<List<Order>> getOrders(String texto) {
        return ResponseEntity.ok(orderService.searchOrder(texto));
    }

    @PutMapping
    public ResponseEntity<Integer> buyOrder(int cantidad){
        return ResponseEntity.ok(orderService.buyOrder(cantidad));
    }
}