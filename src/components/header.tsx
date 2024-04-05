import nlwIcon from '../assets/nlw-icon.svg';
import { NavLink } from './nav-link';

export function Header() {  
    return (
      <div className="flex items-center gap-5 py-2">
        <img src={nlwIcon} />

        <nav className="flex items-center gap-5">
          <NavLink href="/eventos" className="text-zinc-200">
            Eventos
          </NavLink>
          <NavLink href="/participantes ">Participantes</NavLink>
        </nav>
      </div>
    );
} 