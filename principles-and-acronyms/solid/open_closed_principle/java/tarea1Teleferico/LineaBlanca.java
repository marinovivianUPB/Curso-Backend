package tarea1Teleferico;

public class LineaBlanca extends Teleferico{
    public LineaBlanca() {
        this.name="Linea Blanca";
    }

    @Override
    void iniciandoRecorrido() {
        System.out.println("Inicio de recorrido: 8am");
    }

    @Override
    void llegadaAParada() {
        System.out.println("Llegada a parada Triangular");
    }

    @Override
    void terminandoRecorrido() {
        System.out.println("Fin de recorrido: 10pm");
    }
}
