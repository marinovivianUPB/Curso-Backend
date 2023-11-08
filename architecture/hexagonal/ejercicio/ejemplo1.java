package application.ports.in;

import application.model.Order;

public class Order{
    String name;
    String autor;
    String[] detalles = new String[];
    String id;
    int stock;

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String[] getDetalles() {
        return detalles;
    }

    public void setDetalles(String[] detalles) {
        this.detalles = detalles;
    }
}

public interface OrderService {
    void createOrder(Order order);
    List<Order> listOrders();
    List<Order> searchOrder(String texto);
    Order searchOrderById(String id);
    int buyOrder(int cantidad);
}

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
        return orderRepository.searchById(id);
    }

    @Override
    public List<Order> searchOrder(String texto) {
        return orderRepository.search(texto)
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
    public List<Order> search(String texto){
        return libros.stream().filter(a -> (a.getName()==texto || a.getAutor()==texto)).collect(Collectors.toList());
    }

    public Order searchById(String id){
        eturn libros.stream().filter(a -> a.id==id).collect(Collectors.toList()).get(0);
    }
}

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
}