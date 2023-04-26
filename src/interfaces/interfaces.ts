export interface IPosts{
    body: string,
    id: number,
    title: string,
    userId: number,
}

export interface IPhotos{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
}

export interface IFormData {
	firstName: string
	lastName: string
	password: string
	status: string
}