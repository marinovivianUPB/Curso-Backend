package tarea1Teleferico;

public class LineaRoja extends Teleferico{
    public LineaRoja() {
        this.name="Linea Roja";
    }

    @Override
    void iniciandoRecorrido() {
        System.out.println("Inicio de recorrido: 5am");
    }

    @Override
    void llegadaAParada() {
        System.out.println("Llegada a parada Tren");
    }

    @Override
    void terminandoRecorrido() {
        System.out.println("Fin de recorrido: 10pm");
    }
}
