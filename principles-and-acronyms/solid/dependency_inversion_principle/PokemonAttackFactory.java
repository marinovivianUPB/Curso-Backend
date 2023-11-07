public class PokemonAttackFactory {

    public static PokemonAttack create(String pokemonName) {
        PokemonAttack pokemon;
        switch (pokemonName.toLowerCase()) {
            case "pikachu":
                pokemon = new Pikachu();
                break;
            case "charmander":
                pokemon=new Charmander();
                break;
            default:
                pokemon = new Pikachu();
                break;
        }
        return pokemon;

    }
}
