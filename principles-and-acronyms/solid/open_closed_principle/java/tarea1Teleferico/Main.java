package tarea1Teleferico;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String [] args){
        List<Teleferico> lineas = new ArrayList<>();
        lineas.add(new LineaAzul());
        lineas.add(new LineaVerde());
        lineas.add(new LineaAmarilla());
        lineas.add(new LineaDorada());

        for(Teleferico tel : lineas){
            System.out.println("-------------"+tel.name+"----------------------");
            tel.iniciandoRecorrido();
            tel.llegadaAParada();
            tel.terminandoRecorrido();
            System.out.println("-------------------------------");
        }
    }
}
