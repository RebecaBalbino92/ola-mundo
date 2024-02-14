import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

const SobrePretaLabPage = () => {
    return (
        <Grid container spacing={2} marginTop="40px"> 
            <Grid item xs={12} sm={6}> 
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://devjuniorplus.com.br/assets/images/lautaro-andreani-uysbcu9rp3y-unsplash.jpeg" style={{ opacity: 0.8 }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ciclo de Formação Básico em Tecnologia 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A formação oferecida pela PretaLab foi uma experiência maravilhosa. Encontrei
                                nesse coletivo de mulheres que se juntam para estudar programação muitas histórias
                                inspiradoras, professorras dedicadas, colegas companheiras e uma equipe de apoio muito massa.
                                O módulo de React foi o mais desafiador para minha pessoa, tendo exigir um entendimento
                                do todo e conexões entre o código escrito. Apesar da dificuldade foi um momento de muito
                                aprendizado e com certeza de grande contribuição para minha profissão,
                                tendo em vista que muitas vezes eu preciso entender
                                o que ocorre por trás das telas. Hahaha Obrigada pela paciência, Liz!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://fisenge.org.br/wp-content/uploads/2017/08/Preta-Lab-1024x664.jpg" style={{ opacity: 0.8 }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                PretaLab
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            A PretaLab é uma iniciativa do Olabi, organização social
                             que trabalha para trazer diversidade para a tecnologia
                            e inovação. Além de ser uma plataforma que conecta mulheres 
                            negras que são ou gostariam de ser da tecnologia, 
                            por meio dos nossos ciclos formativos, rede de profissionais, 
                            mercado de trabalho, consultorias e estudos. O ciclo formativo
                             em tecnologia da PretaLab possui uma metodologia autoral que engloba
                              o desenvolvimento do conhecimento técnico, autogestão e soft skills
                               das estudantes. O objetivo é desenvolver a técnica, mas também
                                as habilidades que não são ensinadas em cursos tradicionais.

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
};

export default SobrePretaLabPage;
