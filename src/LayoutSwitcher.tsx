import { FC } from 'react';
import { Select } from './component-libraries/uikit/Select';
import { FieldLayoutGrid } from './forms/FieldLayoutGrid';
import { FieldLayoutSimple } from './forms/FieldLayoutSimple';

export const layoutsMap = {
    simple: FieldLayoutSimple,
    grid: FieldLayoutGrid,
};

export const LayoutSwitcher: FC<{
    layout: keyof typeof layoutsMap;
    onChange: (layout: keyof typeof layoutsMap) => void;
}> = ({ layout, onChange }) => {
    return (
        <label>
            Layout:
            <Select
                value={layout}
                onChange={(e) =>
                    onChange(e.target.value as keyof typeof layoutsMap)
                }
            >
                {Object.keys(layoutsMap).map((key) => (
                    <option key={key} value={key}>
                        {key}
                    </option>
                ))}
            </Select>
        </label>
    );
};
