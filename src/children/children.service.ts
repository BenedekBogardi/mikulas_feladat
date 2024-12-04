import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ChildrenService {
  db: PrismaService

  constructor(db: PrismaService) {
    this.db = db;
  }
  create(createChildDto: CreateChildDto) {
    return this.db.child.create({
      data: createChildDto
    })
  }

  findAll() {
    return this.db.child.findMany()
  }

  findOne(id: number) {
    return this.db.child.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateChildDto: UpdateChildDto) {
    try{
      return await this.db.child.update({
        where: {
          id
        },
        data: updateChildDto
      });
    }
    catch{
      throw new NotFoundException
    }
  }

  async remove(id: number) {
    try{
      return await this.db.child.delete({
        where: {
          id
        }
      })
    }
    catch{
      throw new NotFoundException
    }
  }
  async addToyToChild(toyId: number, childId: number){
    return await this.db.toyList.create({
      data: {
        toyId,
        childId
      }
    })
  }
  async deleteToyFromChild(toyId: number, childId: number){
    try{
      await this.db.toyList.delete({
        where: {
          toyId_childId: {
            childId: childId,
            toyId: toyId
          }
        }
      })
    }catch{
      throw new NotFoundException
    }
    
  }
}
