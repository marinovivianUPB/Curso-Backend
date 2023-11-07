abstract class Item {
    private int stock;
    private String name;
    public int getStock() {
        return stock;
    }
    public void setStock(int stock) {
        this.stock = stock;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void sell(int quantity) {
        if (stock >= quantity) {
            stock -= quantity;
            System.out.println(name+" vendido. Stock actualizado: " + stock);
        } else {
            System.out.println("Stock insuficiente para el tipo de item: "+name);
        }
    }
}
class Book extends Item{
    Book(int stock){
        setName("Libro");
        setStock(stock);
    }
}

class Game extends Item{
    Game(int stock){
        setName("Juego");
        setStock(stock);
    }
}

class Main{
    public static void main(String [] args){
        Book a = new Book(150);
        Game b = new Game(150);

        a.sell(3);
        b.sell(14);
    }
}