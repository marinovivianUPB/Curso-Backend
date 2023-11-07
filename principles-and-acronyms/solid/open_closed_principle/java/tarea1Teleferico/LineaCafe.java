package tarea1Teleferico;

public class LineaCafe extends Teleferico{
    public LineaCafe() {
        this.name="Linea Cafe";
    }

    @Override
    void iniciandoRecorrido() {
        System.out.println("Inicio de recorrido: 7am");
    }

    @Override
    void llegadaAParada() {
        System.out.println("Llegada a parada Pando");
    }

    @Override
    void terminandoRecorrido() {
        System.out.println("Fin de recorrido: 1pm");
    }
}
