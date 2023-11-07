public class Charmander implements PokemonAttack {

    @Override
    public void execute() {
        ataqueFuego();
    }

    private void ataqueFuego(){
        System.out.println("Charmander usa Ataque de Fuego!");
    }

    @Override
    public void charge() {
        System.out.println("Charmander esta recargando ataque");
    }

}
