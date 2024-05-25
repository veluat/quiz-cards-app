import { FC } from 'react'

import * as TabsSwitcher from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

export type TabType = {
  disabled?: boolean
  text: string
  value: string
}

type PropsType = {
  onValueChange: (value: string) => void
  tabs: TabType[]
  value: string
}

export const Tabs: FC<PropsType> = ({ onValueChange, tabs, value }) => {
  return (
    <TabsSwitcher.Root onValueChange={onValueChange} value={value}>
      <TabsSwitcher.List>
        {tabs.map(t => (
          <TabsSwitcher.Trigger
            className={s.trigger}
            disabled={t.disabled}
            key={t.value}
            value={t.value}
          >
            {t.text}
          </TabsSwitcher.Trigger>
        ))}
      </TabsSwitcher.List>
    </TabsSwitcher.Root>
  )
}
