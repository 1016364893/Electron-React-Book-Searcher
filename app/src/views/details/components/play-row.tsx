import React from 'react'

import { Row, Col, Button } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import './play-row.less'
import Store from 'electron-store'
import { PlayCircleOutlined } from '@ant-design/icons'
const store = new Store<any>()
interface PlayRowProps {
  cols: number
  items: Array<any>
  start: number
}

export default class PlayRow extends React.Component<PlayRowProps> {
  constructor(props: PlayRowProps) {
    super(props)
  }
  play(add: string) {
    store.set('play-url', add)
    $tools.createWindow('Trans', {
      windowOptions: {
        title: 'Translating results',
        transparent: true,
        minWidth: 200,
        minHeight: 200,
        width: 1500,
        height: 843.75,
        // titleBarStyle: 'customButtonsOnHover',
        vibrancy: 'light',
        resizable: true,
        frame: false,
        // maximizable: true,
      },
    })
  }
  render() {
    const { cols, items, start } = this.props
    const colArea = items.map((add: string, ind: number) => {
      return (
        <Col key={uuidv4()} span={cols}>
          <span key={uuidv4()} onClick={this.play.bind(this, add)}>
            <Button key={uuidv4()} type="primary" icon={<PlayCircleOutlined></PlayCircleOutlined>}></Button>
            <span key={uuidv4()} style={{ paddingLeft: '5px' }}>
              第{start + ind + 1}集
            </span>
          </span>
        </Col>
      )
    })
    // if (items.length % 2 != 0) {
    //   fillCol = <Col key={uuidv4()} flex="auto"></Col>
    // } else {
    //   fillCol = ''
    // }
    return (
      <div key={uuidv4()} className="play-row-container">
        <Row key={uuidv4()}>{colArea}</Row>
      </div>
    )
  }
}
