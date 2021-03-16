import './Abilities.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Ability} from '../../models/ability';

export const Abilities = (props: {abilities: Ability[]}) => {
    return (
        <Card>
            <CardContent>
                {props.abilities.map(ability => (
                    <div className="ability-text"> 
                        <span className="ability-name">{ability.name}</span>:{' '}
                        {ability.characteristics.characteristic['#text']}
                    </div>
                ))}
            </CardContent>

        </Card> 
    )

};
