package tarea1Teleferico;

public class LineaDorada extends Teleferico{
    public LineaDorada() {
        this.name="Linea Dorada";
    }

    @Override
    void iniciandoRecorrido() {
        System.out.println("Inicio de recorrido: PRONTO");
    }

    @Override
    void llegadaAParada() {
        System.out.println("Llegada a parada SORPRESA");
    }

    @Override
    void terminandoRecorrido() {
        System.out.println("Fin de recorrido: PRONTO");
    }
}
