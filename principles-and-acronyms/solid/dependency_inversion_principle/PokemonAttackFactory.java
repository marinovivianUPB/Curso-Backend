public class PokemonAttackFactory {

    public static PokemonAttack create(String pokemonName) {
        PokemonAttack pokemon;
        switch (pokemonName.toLowerCase()) {
            case "pikachu":
                pokemon = (PokemonAttack) new Pikachu();
                break;
            default:
                pokemon = (PokemonAttack) new Pikachu();
                break;
        }
        return pokemon;

    }
}
