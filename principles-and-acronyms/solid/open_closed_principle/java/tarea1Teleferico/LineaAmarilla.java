package tarea1Teleferico;

public class LineaAmarilla extends Teleferico{

    public LineaAmarilla() {
        this.name="Linea Amarilla";
    }

    @Override
    void iniciandoRecorrido() {
        System.out.println("Inicio de recorrido: 6am");
    }

    @Override
    void llegadaAParada() {
        System.out.println("Llegada a parada Obrajes");
    }

    @Override
    void terminandoRecorrido() {
        System.out.println("Fin de recorrido: 10pm");
    }
}
