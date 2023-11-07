public class Pikachu implements PokemonAttack {

    @Override
    public void execute() {
        ataqueElectrico();
    }

    private void ataqueElectrico(){
        System.out.println("Pikachu usa Ataque Eléctrico!");
    }

    @Override
    public void charge() {
        System.out.println("Pikachu esta recargando ataque");
    }

}
