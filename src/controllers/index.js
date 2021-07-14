import Home from './home.controller';
import Config from './config.controller';
import Game from './game.controller';
import Win from './win.controller';
import Lose from './lose.controller'
import Tutorial1 from './tutorial1.controller'
import Tutorial2 from './tutorial2.controller'
const pages = {
    home: Home,
    config: Config,
    game: Game,
    win: Win,
    lose: Lose,
    tutorial1: Tutorial1,
    tutorial2: Tutorial2
};

export { pages };