import './Abilities.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const Abilities = (props: any) => {
    return (
        <Card>
            <CardContent>
                {props.abilities.map((ability: any) => (
                    <div className="ability-text"> 
                        <span className="ability-name">{ability.name}</span>:{' '}
                        {ability.characteristics.characteristic['#text']}
                    </div>
                ))}
            </CardContent>

        </Card> 
    )

}