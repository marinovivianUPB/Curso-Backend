public class Main {
    public static void main(String[] args) {

        PokemonTrainer ash = new PokemonTrainer(PokemonAttackFactory.create("Pikachu"));
        ash.commandToAttack();

        PokemonTrainer mcquack = new PokemonTrainer(PokemonAttackFactory.create("charmander"));
        mcquack.commandToAttack();
    }
}
