import { useState } from 'react';
import { Fieldset, Form, Label, Legend, Input, Panell } from './StyledComponent';
import '../styles/App.css';

export const Presupuesto = () => {
    // HOOKS
    const [presupuesto, setPresupuesto] = useState({
        web: false,
        seo: false,
        google: false,
        pages: 0,
        languages: 0
    });
    const [importeTotal, setImporteTotal] = useState(0);
    // Calcular extras
    const { pages, languages } = presupuesto;
    let totalExtras = (pages + languages) * 30;
    // HANDLES
    const handleCheckbox = ({ target }) => {
        const isChecked = target.checked;
        setPresupuesto({ ...presupuesto, [target.id]: isChecked });
        isChecked
            ? setImporteTotal(importeTotal + Number(target.value))
            : setImporteTotal(importeTotal - Number(target.value));
    };
    const handleNumber = (event) => {
        setPresupuesto({ ...presupuesto, [event.target.id]: Number(event.target.value) });
    };

    //! Break Point

    return (
        <Fieldset>
            <Legend> ¿Qué quieres hacer? </Legend>
            <Form>
                <Label htmlFor="web">
                    <Input type="checkbox" id="web" value={500} onChange={handleCheckbox} />
                    Una página web (500€)
                </Label>
                {presupuesto.web && (
                    <Panell className="panell">
                        <div className="panell-label">
                            <label htmlFor="pages">Número de páginas: </label>
                            <input className="panell-input" type="number" id="pages" min={0} onChange={handleNumber} />
                        </div>
                        <div className="panell-label">
                            <label htmlFor="languages">Número de idiomas: </label>
                            <input
                                className="panell-input"
                                type="number"
                                id="languages"
                                min={0}
                                onChange={handleNumber}
                            />
                        </div>
                    </Panell>
                )}
                <Label htmlFor="seo">
                    <Input type="checkbox" id="seo" value={300} onChange={handleCheckbox} />
                    Una consultoria SEO (300€)
                </Label>
                <Label htmlFor="google">
                    <Input type="checkbox" id="google" value={200} onChange={handleCheckbox} />
                    Una campaña de Google Ads (200€)
                </Label>
                <hr />
                <p>
                    <em>Precio:</em> <strong>{importeTotal > 0 ? importeTotal + totalExtras : 0}€</strong>
                </p>
            </Form>
        </Fieldset>
    );
};
