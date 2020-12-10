import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import PageHeader from '../../components/PageHeader';
import ProjectLink from '../../components/ProjectLink';
import { useFetch } from '../../hooks/useFetch';

import Modal from '../../components/ModalCreateProject';

import {
	Section,
	BtnContainer,
	ProjectsList,
} from "./styles";

interface Project {
	id: number;
	name: string;
	modify_date: Date;
	create_date: Date;
};

export interface Modal {
	show: boolean;
}

const Home: React.FC = () => {
	const [showModal, setShowModal] = useState<Boolean>(false);
	const [projects, setProjects] = useState<Project[]>([]);

	const { data } = useFetch<Project[]>('/team-api/members/teams/', 2);

	if (!data) {
		return <p style={{ margin: 80 }}>Carregando...</p>
	}

	const openModal = () => {
		setShowModal(prev => !prev);
	};

	return (
		<>
			<Modal showModal={showModal} setShowModal={setShowModal} />
			<PageHeader />

			<Section>
				<BtnContainer>
					<button onClick={openModal}>
						<MdAdd />
						Novo
					</button>
					<hr />
				</BtnContainer>

				<ProjectsList>
					{data.map(itens => {
						return (
							<ProjectLink
								key={itens.id}
								id={itens.id}
								name={itens.name}
								create_date={itens.create_date}
							/>
						);
					})}
				</ProjectsList>
			</Section>
		</>
	);
}

export default Home;