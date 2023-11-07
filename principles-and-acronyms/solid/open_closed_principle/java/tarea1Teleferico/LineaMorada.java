package tarea1Teleferico;

public class LineaMorada extends Teleferico{

    public LineaMorada() {
        this.name ="Linea Morada";
    }

    @Override
    void iniciandoRecorrido() {
        System.out.println("Inicio de recorrido: 10am");
    }

    @Override
    void llegadaAParada() {
        System.out.println("Llegada a parada San Pedro");
    }

    @Override
    void terminandoRecorrido() {
        System.out.println("Fin de recorrido: 12am");
    }
}
