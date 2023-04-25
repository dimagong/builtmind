import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline"
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash"
import { Avatar, IconButton, Tooltip } from "@mui/material"
import { IPhotos, IPosts } from "../../interfaces"

type TableProps = {
	posts: IPosts[]
	images: IPhotos[]
	onEditePost: (data: IPosts) => void
	onDeletePost: (data: IPosts) => void
}

export const TablePosts = ({ posts, images, onEditePost, onDeletePost }: TableProps) => {
	return (
		<TableContainer
			component={Paper}
			style={{ maxHeight: "70vh", width: "70vw", overflowY: "scroll" }}
		>
			<Table aria-label='simple table'>
				<TableHead
					style={{
						backgroundColor: "#394867",
						position: "sticky",
						top: 0,
						zIndex: 1,
					}}
				>
					<TableRow>
						<TableCell style={{ color: "white", position: "sticky", top: 0 }}>
							N ({posts.length})
						</TableCell>
						<TableCell style={{ color: "white", position: "sticky", top: 0 }}>User</TableCell>
						<TableCell style={{ color: "white", position: "sticky", top: 0 }} align='center'>
							Title
						</TableCell>
						<TableCell style={{ color: "white", position: "sticky", top: 0 }} align='center'>
							Body
						</TableCell>
						<TableCell
							style={{ color: "white", position: "sticky", top: 0 }}
							align='center'
							colSpan={2}
						>
							Action
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody
					style={{
						backgroundColor: "#F1F6F9",
					}}
				>
					{posts.map((post, idx) => (
						<TableRow
							key={`${post.id}-${post.userId}`}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component='th' scope='row' style={{ color: "#212A3E", fontWeight: 900 }}>
								{idx + 1}
							</TableCell>
							<TableCell align='center'>
								<Avatar
									src={images.find((img) => img.id === post.id)?.thumbnailUrl}
									sx={{ width: 24, height: 24 }}
								/>
							</TableCell>
							<TableCell align='left'>{post.title}</TableCell>
							<TableCell align='left'>{post.body}</TableCell>
							<TableCell align='right'>
								<Tooltip title='Edit'>
									<IconButton onClick={() => onEditePost(post)}>
										<DriveFileRenameOutlineIcon />
									</IconButton>
								</Tooltip>
							</TableCell>
							<TableCell align='right'>
								<Tooltip title='Delete'>
									<IconButton onClick={() => onDeletePost(post)}>
										<RestoreFromTrashIcon />
									</IconButton>
								</Tooltip>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
