import React from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core'
import { ChessInstance } from 'chess.js';

import { Store } from '../store/model';

const GameHistory = ({ chess }: { chess: ChessInstance }) => (
	<Paper style={{ height: "500px" }}>
		{chess ?
			<div className="pt-1 mt-1 mb-2">
				{chess.history().length > 0 && chess.pgn({ newline_char: '\n', max_width: 5 }).split('\n').map(row => (
					<div key={row} className="row">
						<div className="col-2" style={{ textAlign: 'center' }}>{row.split(' ')[0]}</div>
						<div className="col-5">{row.split(' ')[1]}</div>
						<div className="col-5">{row.split(' ')[2] || '...'}</div>
					</div>
				))}
			</div> : <p>chess is undefined</p>
		}
	</Paper>
);

const mapStateToProps = (state: Store) => ({ chess: state.chess.chess });

export default connect(mapStateToProps)(GameHistory);
