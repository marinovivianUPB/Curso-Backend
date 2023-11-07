package tarea1Teleferico;

public class LineaNaranja extends Teleferico{
    public LineaNaranja() {
        this.name="Linea Naranja";
    }

    @Override
    void iniciandoRecorrido() {
        System.out.println("Inicio de recorrido: 12pm");
    }

    @Override
    void llegadaAParada() {
        System.out.println("Llegada a parada Busch");
    }

    @Override
    void terminandoRecorrido() {
        System.out.println("Fin de recorrido: 6pm");
    }
}
