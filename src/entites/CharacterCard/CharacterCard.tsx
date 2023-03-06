import React from "react";
import s from "./character-card.module.scss";
import {CharacterType} from "../../types/character.types";
import Link from "next/link";
import Image from 'next/image';
import {ROUTES} from "@utils/constants";

interface Props {
   character: CharacterType;
}

const CharacterCard: React.FC<Props> = ({character}: Props) => {
   return (
      <div className={s.characterCard}>
         <Image
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
         />
         <div className={s.characterInfo}>
            <Link href={`${ROUTES.CHARACTER}/${character.id}`}>
               <h2>{character.name}</h2>
            </Link>

            <span className={s.status}>
          <span className={`${s.status_icon} ${s[character.status.toLowerCase()]}`}></span>
          <p>{character.status}</p>
       </span>

            <div className={s.infoSection}>
               <p className={s.label}>Species:</p>
               <p>{character.species}</p>
            </div>
            <div className={s.infoSection}>
               <p className={s.label}>Gender:</p>
               <p>{character.gender}</p>
            </div>
         </div>
      </div>
   );
};

export default CharacterCard;
